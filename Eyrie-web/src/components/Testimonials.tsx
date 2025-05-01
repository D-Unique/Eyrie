import Image from "next/image";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "A testimonial describing what the person thinks about this service, product or startup in general.",
      name: "Name Surname",
      description: "Description",
      image: "/images/testimony1.jpg",
    },
    {
      id: 2,
      text: "A testimonial describing what the person thinks about this service, product or startup in general.",
      name: "Name Surname",
      description: "Description",
      image: "/images/testimony2.jpg",
    },
    {
      id: 3,
      text: "A testimonial describing what the person thinks about this service, product or startup in general.",
      name: "Name Surname",
      description: "Description",
      image: "/images/testimony3.jpg",
    },
  ];

  return (
    <>
      {/* Testimonials Section */}
      <div className="bg-[#F2F2F2] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#FEFEFE] shadow-md rounded-3xl p-6 flex flex-col items-start text-start"
              >
                <p className="text-gray-700 mb-4 text-sm">"{testimonial.text}"</p>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mb-4"
                />
                <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.description}</p>
                <div className="w-full flex justify-end space-x-4 mt-4">
                  <FaFacebook className="text-gray-500 hover:text-blue-600 cursor-pointer" />
                  <FaTwitter className="text-gray-500 hover:text-blue-400 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}