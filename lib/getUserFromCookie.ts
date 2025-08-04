// // lib/getUserFromCookie.ts
// import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";

// export interface DecodedToken {
//   userId: string;
//   name: string;
//   email: string;
//   iat: number;
// }

// export async function getUserFromCookie(): Promise<DecodedToken | null> {
//   const cookieStore = await cookies();
//   const token = (await cookieStore.get("token"))?.value;
//   console.log("[getUserFromCookie]", token);
//   if (!token) return null;

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
   
// console.log("[getUserFromCookie] decoded:", decoded);

//     return decoded;
//   } catch (error) {
//     console.error("Invalid JWT token:", error);
//     return null;
//   }
// }


import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface DecodedToken {
  userId: string;
  name?: string;
  email?: string;
  iat: number;
  exp: number;
}

export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    return {
      userId: decoded.userId,
      name: decoded.name || null,
      email: decoded.email || null,
    };
  } catch (err) {
    console.log("[getUserFromCookie] Invalid token:", err);
    return null;
  }
}
