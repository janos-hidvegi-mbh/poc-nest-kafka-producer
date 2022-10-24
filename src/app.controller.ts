import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClientKafka } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject("kafka-client") private readonly client: ClientKafka
  ) {
  }

  @Get()
  getHello(): string {
    this.client.emit("test-topic", { message: "Hello World!" });
    return this.appService.getHello();
  }
}
