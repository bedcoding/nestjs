import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateSampleDto } from "./dtos/create-sample-dto";
import { Sample } from "./entities/sample.entity";
import { SampleService } from "./sample.service";

// @Resolver만 붙이면 graphql로부터 import 된다.
@Resolver(of => Sample)  // sample.entity 파일에서 불러옴
export class SampleResolver {
    constructor(private readonly sampleService: SampleService) {

    }

    // testParamName이라는 파라미터를 받는 경우
    @Query(returns => [Sample])
    samples(): Promise<Sample[]> {
        return this.sampleService.getAll();
    }

    // 인자들 일일히 넣어주는게 아니라 dto 파일 만들어서 넣어줌
    @Mutation(returns => Boolean)
    createSample(@Args() CreateSampleDto: CreateSampleDto): boolean {
        return true;
    }
}

/* 
// 사용법
query {
    samples {
        id
    }
}

mutation {
  createSample(
  name: "12345"
  isVegan: true
  address: "1"
  ownersName: "1"
  )
}
*/