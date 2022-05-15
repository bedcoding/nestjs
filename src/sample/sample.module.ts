import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './entities/sample.entity';
import { SampleResolver } from './sample.resolver';
import { SampleService } from './sample.service';

@Module({
    imports: [TypeOrmModule.forFeature([Sample])],  // forFeature: TypeOrmModule이 특정 feature를 import 할 수 있게 해줌 (여기서는 sampleEntity)
    providers: [SampleResolver, SampleService],
})

export class SampleModule {}
