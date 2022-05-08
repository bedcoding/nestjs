import { Query, Resolver } from "@nestjs/graphql";

// @Resolver만 붙이면 graphql로부터 import 된다.
@Resolver()
export class SampleResolver {
    
    // Boolean을 리턴하는 API
    @Query(() => Boolean)
    isConnect(): Boolean {
        return true;
    }

}

/* 
// 사용법
query {
    isConnect
}
*/