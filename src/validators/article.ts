import { body, param, check, ValidationChain } from "express-validator/check";

export function articleValidator(method: string): ValidationChain[] {
    switch (method) {
        case "GET /articles": {
            return [];
        }
        case "GET /articles/:articleId": {
            return [
                param("articleId", "Invalid or missing ':articleId'").exists().isMongoId()
            ];
        }
        case "POST /articles": {
            return [
                body("title", "Invalid or missing 'title'").exists().isString(),
                body("subtitle", "Invalid or missing 'subtitle'").exists().isString(),
                body("body", "Invalid or missing 'body'").exists().isString(),
                body("userId", "Invalid or missing 'userId'").exists().isMongoId(),
            ];
        }
        case "PUT /articles/:articleId": {
            return [
                param("articleId", "Invalid or missing ':articleId'").exists().isMongoId(),
                body("subtitle", "Invalid or missing 'subtitle'").exists().isString(),
                body("body", "Invalid or missing 'body'").exists().isString(),
                body("userId", "Invalid or missing 'userId'").optional().isMongoId(),
            ];
        }
        case "DELETE /articles/:articleId": {
            return [
                param("articleId", "Invalid or missing ':articleId'").exists().isMongoId()
            ];
        }
    }
}
