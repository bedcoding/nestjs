import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateSampleDto } from "./dtos/create-sample-dto";
import { Sample } from "./entities/sample.entity";

// @Resolver만 붙이면 graphql로부터 import 된다.
@Resolver(of => Sample)  // sample.entity 파일에서 불러옴
export class SampleResolver {
    
    // testParamName이라는 파라미터를 받는 경우
    @Query(returns => [Sample])
    samples(@Args('testParamName') testParamName: boolean): Sample[] {
        return [];
    }

    // 인자들 일일히 넣어주는게 아니라 dto 파일 만들어서 넣어줌
    @Mutation(returns => Boolean)
    createSample(
        @Args() CreateSampleDto: CreateSampleDto,
        // @Args('name') name:string,
        // @Args('isVegan') isVegan:boolean,
        // @Args('address') address:string,
        // @Args('ownersName') ownersName:string,
    ): boolean {
        return true;
    }
}

/* 
// 사용법
query {
    samples(testParamName: true) {
        name
    }
}

*/