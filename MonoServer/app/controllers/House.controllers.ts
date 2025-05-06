import { Response, Request } from "express";
import { HttpResponse } from "../utility/HttpResponse.utility";
import { knexDb } from "../database/Mysql.database";
import { UploadedFile } from "express-fileupload";
import fs from 'fs/promises'
import path from "path";
import generateSecureRandomString from "../utility/GenerateRandom.utility";



class HouseController {
   static async uploadhouse(req: Request, res: Response) {
      const payLoad = req.payload
      const files = req.files
      let houseId: number | null = null;
   
      const { name, houseType, description, address, numOfBed, numOfBathRoom, price, squareFt } = req.body;
      if (!name || !houseType || !price || !description || !address) {
         return res.json(HttpResponse.BadRequest(null, `Name , houseType, price, address and description are required`))
      }

      const trx = await knexDb.transaction();
      

      try {
         if (files && payLoad) {
            // Save house
            const result = await trx('houses')
               .insert({
                  name: name,
                  address: address,
                  description: description,
                  house_type: houseType,
                  price: price,
                  num_bedrooms: numOfBed,
                  num_bathrooms: numOfBathRoom,
                  square_ft: squareFt,
                  user_id: payLoad.user_id
               })

            houseId = result[0]; // get the inserted id
       
            for (const key of Object.keys(files)) {
               const fileOrFiles = files[key] as UploadedFile | UploadedFile[];

               //PROCESS UploadedFile
            
               const processFiles = async (file: UploadedFile) => {
                  
                  let filePath = ""
                  const fileName = `${houseId}_${Date.now()}_${generateSecureRandomString(5)}${path.extname(file.name)}`;
                  


                  try { 
                     if (file.mimetype.startsWith('image/')) {
                        filePath = "./app/Public/Images/" + fileName
                        await trx('images').insert({ filePath, house_id: houseId });
                        console.log('Data inserted successfully');
                     } 
                   else if (file.mimetype.startsWith('video/')) {
                        filePath = "./app/Public/Videos/" + fileName
                        await trx('videos').insert({ filePath, house_id: houseId, title: file.name });
                        console.log('Data inserted successfully');

                     }
                     
                     file.mv(filePath, err => {
                        if (err) {
                            console.error(`Error saving file ${file.name}:`, err);
                            return res.json(HttpResponse.InternalServerError(`${err}`));
                        }
                        console.log(`Successfully saved file ${file.name}`);
                    });
                  } catch (err) {
                     console.log(err)

                  }
                  
               }
               
               if (Array.isArray(fileOrFiles)) {
                  fileOrFiles.forEach(processFiles)

               } else {
                  processFiles(fileOrFiles)
               }
         
               await trx.commit();
               return res.json({ "message": "file upload", "houseId": houseId })
      
            }
         }
      }
      catch (error) {
               await trx.rollback();
               return res.json(HttpResponse.InternalServerError(`Error uploading House to Database${error}`))
        
            }
   }


static async updatehouse(req: Request, res: Response) {
  const payLoad = req.payload;
  const files = req.files;
  const houseId = req.params.houseId
  const {
    name,
    houseType,
    description,
    address,
    numOfBed,
    numOfBathRoom,
    price,
    squareFt,
  } = req.body;

  if (!payLoad || !files || !houseId) {
    return res.json(HttpResponse.BadRequest(null, "Invalid request payload"));
  }

  try {
     const record = await knexDb("houses").where({ id: houseId }).first();
     if (!record) {
      return res.json(HttpResponse.BadRequest(null, "House does not exist"));
    }

     

    if (!record || record.status === "approved") {
      return res.json(HttpResponse.BadRequest(null, "Cannot update processed uploads"));
    }

    const trx = await knexDb.transaction();

    try {
      await trx("houses").where({ id: houseId }).update({
        name,
        address,
        description,
        price,
        num_bedrooms: numOfBed,
        num_bathrooms: numOfBathRoom,
        square_ft: squareFt,
        house_type: houseType,
      });
       
       // Remove prev Vidoes and Images

      const existingImages = await trx("images").where({ house_id: houseId });
      for (const img of existingImages) {
       await fs.unlink(img.path).catch(() => {}); // ignore errors if file not found
     }
       await trx("images").where({ house_id: houseId }).del();
       
       const existingVideos = await trx("videos").where({ house_id: houseId });
         for (const vid of existingVideos) {
         await fs.unlink(vid.path).catch(() => {});
         }
       await trx("videos").where({ house_id: houseId }).del();
       

       const processFile = async (file: UploadedFile) => {
          
          let filePath = "" 
          const fileName = `${houseId}_${Date.now()}_${generateSecureRandomString(5)}${path.extname(file.name)}`;
        if (file.mimetype.startsWith("image/")) {
         filePath = "./app/Public/Images/" + fileName
         await trx("images").insert({ house_id: houseId, path: filePath });
          
        } else if (file.mimetype.startsWith("video/")) {
           filePath = "./app/Public/Videos/" + fileName
           await trx("videos").insert({ house_id: houseId, path: filePath });
        }
        file.mv(filePath, err => {
         if (err) {
             console.error(`Error saving file ${file.name}:`, err);
             return res.json(HttpResponse.InternalServerError(`${err}`));
         }
         console.log(`Successfully saved file ${file.name}`);
     });
          
          
      };

      for (const key of Object.keys(files)) {
        const fileOrFiles = files[key] as UploadedFile | UploadedFile[];
        if (Array.isArray(fileOrFiles)) {
          for (const file of fileOrFiles) {
            await processFile(file);
          }
        } else {
          await processFile(fileOrFiles);
        }
      }

      await trx.commit();
      return res.json(HttpResponse.OK(null, "House updated successfully"));
    } catch (error) {
      await trx.rollback();
      console.error("Transaction failed:", error);
      return res.json(HttpResponse.InternalServerError("Failed to update house"));
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.json(HttpResponse.InternalServerError(`${err}`));
  }
}

}


export default HouseController;
