import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './entities/sample.entity';
import { SampleResolver } from './sample.resolver';
import { SampleService } from './sample.service';

@Module({
    imports: [TypeOrmModule.forFeature([Sample])],
    providers: [SampleResolver, SampleService],
})

export class SampleModule {}
