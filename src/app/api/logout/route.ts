import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const res = NextResponse.redirect(new URL('/', request.url)); // ✅ construct full URL
  res.cookies.set('token', '', {
    path: '/',
    expires: new Date(0),
  });
  return res;
}
