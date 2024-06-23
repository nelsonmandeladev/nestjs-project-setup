import { Controller, Get, Logger } from '@nestjs/common';

@Controller('probes')
export class HealthController {
  constructor(private readonly logger: Logger) {

  }

  @Get("liveness")
  liveness() {
    this.logger.debug("Status is ok");
    return { status: "ok" }
  }
  @Get("readiness")
  readiness() {
    this.logger.debug("Status is ok");
    return { status: "ok" }
  }
}
