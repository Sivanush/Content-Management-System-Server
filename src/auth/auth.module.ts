import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Make sure this environment variable is set
      signOptions: { expiresIn: '1h' }, // You can configure token expiration here
    }),
  ],
  providers: [JwtAuthGuard],
  exports: [JwtAuthGuard, JwtModule], // Export both the guard and JwtModule so they can be used in other modules
})
export class AuthModule {}
