import Redis from 'ioredis';

const redis = new Redis({
  host: 'redis',
  port: 6379,
});


redis.on('connect', () => {
  console.log('✅ Redis connected successfully');
});


redis.on('error', (err) => {
  console.error('❌ Redis connection error:', err);
});


redis.on('end', () => {
  console.log('🔌 Redis connection closed');
});

export default redis
