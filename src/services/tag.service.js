import { ApiService } from "./";

const TagsService = {
  get() {
    return ApiService.get("tags");
  }
};

export { TagsService };
