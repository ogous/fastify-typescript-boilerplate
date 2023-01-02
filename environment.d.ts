export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: 'test' | 'development' | 'production'
      PORT?: string
      ADMIN_USER: string
      ADMIN_PASSWORD: string
    }
  }
}
