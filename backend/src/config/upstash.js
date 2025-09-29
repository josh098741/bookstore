require('dotenv').config()
const {Ratelimit, Analytics} = require('@upstash/ratelimit')
const {Redis} = require('@upstash/redis')

//Create Redis client using env vars
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
})

//Create a ratelimiter that allows 10 request per 20 seconds
const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, "20 s"),
    Analytics: true
})

module.exports = ratelimit