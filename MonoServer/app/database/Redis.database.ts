import Redis from 'ioredis';

const redis = new Redis({
  host: 'redis',
  port: 6379,
});

// 🔌 Listen for connection success
redis.on('connect', () => {
  console.log('✅ Redis connected successfully');
});

// ❌ Error handling
redis.on('error', (err) => {
  console.error('❌ Redis connection error:', err);
});

// 🔌 Disconnected
redis.on('end', () => {
  console.log('🔌 Redis connection closed');
});

// 👇 Example usage (test read/write)
(async () => {
  try {
    await redis.set('key', 'value');
    const value = await redis.get('key');
    console.log('Stored value:', value);
  } catch (err) {
    console.error('Redis command error:', err);
  }
})();


export default redis
