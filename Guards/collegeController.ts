import { Controller, Get, UseGuards, Param, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CollegeService } from './college.service';

@Controller('colleges')
@UseGuards(JwtAuthGuard)
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get('/college_data/:collegeId')
  async getPlacementData(@Param('collegeId') collegeId: number) {
    return this.collegeService.getPlacementData(collegeId);
  }

  @Get('/college_courses/:collegeId')
  async getCollegeCourses(@Param('collegeId') collegeId: number) {
    return this.collegeService.getCollegeCourses(collegeId);
  }

  @Get()
  async filterColleges(
    @Query('city') city: string,
    @Query('state') state: string,
  ) {
    return this.collegeService.filterColleges(city, state);
  }
}
