import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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
}