import supertest from "supertest";
import chai from "chai";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing de la App Web Adoptame", () => {
    // Testing de Pets
    describe("Testing de Pets: ", () => {
        let petId; // ID dinámico para pruebas con mascotas

        it("Endpoint GET /api/pets debe obtener las mascotas correctamente", async () => {
            const { statusCode, body } = await requester.get("/api/pets");
            expect(statusCode).to.equal(200);
            expect(body).to.have.property("payload").that.is.an("array");
        });

        it("Endpoint POST /api/pets debe crear una mascota correctamente", async () => {
            const nuevaMascota = {
                name: "Rex",
                specie: "Perro",
                birthDate: "2021-01-01",
            };
            const { statusCode, body } = await requester.post("/api/pets").send(nuevaMascota);
            expect(statusCode).to.equal(200);
            expect(body.payload).to.have.property("adopted").that.equals(false);
            petId = body.payload._id; // Guardamos el ID de la mascota creada
        });

        it("Endpoint POST /api/pets debe poder crear una mascota con imagen correctamente", async () => {
            const resultado = await requester.post("/api/pets/withimage")
                .field("name", "michi")
                .field("specie", "gatito")
                .field("birthDate", "2021-06-01")
                .attach("image", "./test/gatito.jpeg");
            expect(resultado.status).to.be.equal(200);
            expect(resultado._body.payload).to.be.have.property("_id");
            expect(resultado._body.payload.image).to.be.ok;
        });

        it("Endpoint PUT /api/pets/:pid debe poder modificar una mascota correctamente", async () => {
            if (!petId) throw new Error("El ID de la mascota no está disponible en este punto");

            const datosActualizados = {
                name: "Updated Rex",
                specie: "Updated Perro",
                birthDate: "2021-12-25",
            };

            const { statusCode, body } = await requester.put(`/api/pets/${petId}`).send(datosActualizados);
            expect(statusCode).to.equal(200);
            expect(body.status).to.equal("success");
            expect(body.message).to.equal("pet updated");
        });

        it("Endpoint DELETE /api/pets/:id debe poder eliminar una mascota correctamente", async () => {
            if (!petId) throw new Error("El ID de la mascota no está disponible en este punto");

            const { statusCode } = await requester.delete(`/api/pets/${petId}`);
            expect(statusCode).to.equal(200);
        });
    });

    // Testing de Users
    describe("Testing de Users: ", () => {
        let userId;

        it("Endpoint GET /api/users debe obtener los usuarios correctamente", async () => {
            const { statusCode, body } = await requester.get("/api/users");
            expect(statusCode).to.equal(200);
            expect(body).to.have.property("payload").that.is.an("array");
        });

        it("Endpoint POST /api/users debe registrar un usuario correctamente", async () => {
            const mockUsuario = {
                first_name: "Pepe",
                last_name: "Argento",
                email: "newpepe@zapateriagarmendia.com",
                password: "1234",
            };
        
            const { statusCode, body } = await requester.post("/api/users").send(mockUsuario);
            expect(statusCode).to.equal(201); // Código de respuesta esperado
            expect(body.status).to.equal("success"); // Verifica el estado
            expect(body.payload).to.have.property("email").that.equals(mockUsuario.email); // Verifica el email
            expect(body.payload).to.have.property("_id"); // Verifica que el _id está presente
            userId = body.payload._id; // Guarda el ID para los otros tests
        });

        it("Endpoint GET /api/users/:uid debe obtener un usuario por ID correctamente", async () => {
            if (!userId) {
                throw new Error("El ID del usuario no está disponible en este punto");
            }
        
            const { statusCode, body } = await requester.get(`/api/users/${userId}`);
            expect(statusCode).to.equal(200);
            expect(body.status).to.equal("success");
            expect(body.payload).to.have.property("_id", userId);
        });

        it("Endpoint PUT /api/users/:uid debe actualizar un usuario correctamente", async () => {
            if (!userId) {
                throw new Error("El ID del usuario no está disponible en este punto");
            }
        
            const updatedUser = {
                first_name: "Pepe Updated",
                last_name: "Argento Updated",
            };
        
            const { statusCode, body } = await requester.put(`/api/users/${userId}`).send(updatedUser);
            expect(statusCode).to.equal(200);
            expect(body.status).to.equal("success");
            expect(body.message).to.equal("User updated");
        });
        
        it("Endpoint DELETE /api/users/:uid debe eliminar un usuario correctamente", async () => {
            if (!userId) {
                throw new Error("El ID del usuario no está disponible en este punto");
            }
        
            const { statusCode, body } = await requester.delete(`/api/users/${userId}`);
            expect(statusCode).to.equal(200);
            expect(body.status).to.equal("success");
            expect(body.message).to.equal("User deleted");
        });        
    });
});