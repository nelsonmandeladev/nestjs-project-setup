export const jwtConstants = {
    secretKey: process.env.SECRET_KEY ?? "",
    tokenExpires: process.env.ACCESS_TOKEN_EXPIRES ?? "60s"
}
