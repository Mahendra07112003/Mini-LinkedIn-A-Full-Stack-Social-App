import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

import connectDB from '../../../../lib/mongoose';
import User from '@/models/User';


export async function POST(req: Request) {
  await connectDB();
  const { name, email, password, bio } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashedPassword, bio });
  return NextResponse.json({ user });
}
