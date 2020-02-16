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
                body("author", "Invalid or missing 'author'").exists().isString(),
            ];
        }
        case "PUT /articles/:articleId": {
            return [
                param("articleId", "Invalid or missing ':articleId'").exists().isMongoId(),
                body("title", "Invalid or missing 'title'").optional().isString(),
                body("subtitle", "Invalid or missing 'subtitle'").optional().isString(),
                body("body", "Invalid or missing 'body'").optional().isString(),
                body("author", "Invalid or missing 'author'").optional().isString(),
            ];
        }
        case "DELETE /articles/:articleId": {
            return [
                param("articleId", "Invalid or missing ':articleId'").exists().isMongoId()
            ];
        }
    }
}
