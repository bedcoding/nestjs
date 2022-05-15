import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSampleDto } from "./dtos/create-sample-dto";
import { Sample } from "./entities/sample.entity";

@Injectable()
export class SampleService {
    constructor(
        @InjectRepository(Sample)
        private readonly sample: Repository<Sample>,
    ) {
        
    }

    getAll(): Promise<Sample[]> {
        return this.sample.find()
    }

    createSample(createSampleDto: CreateSampleDto): Promise<Sample> {
        const newSample = this.sample.create(createSampleDto);
        return this.sample.save(newSample);
    }
}