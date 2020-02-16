import { app, port } from "./app";
import mongoose from "mongoose";
import { seedArticles } from "./database/seeds/seedSetup";

const dbUsername = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb://mongo:27017/techgames-sample`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

async function seed() {
    try {
        await seedArticles();
        // tslint:disable-next-line:no-console
        console.log("Seeding successful");
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(`Failure with seeding: ${error}`);
        throw error;
    }
}

const server = app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
    seed()
});

export { server };
