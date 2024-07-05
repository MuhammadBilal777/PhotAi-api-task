import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0", // Specify the OpenAPI version
    info: {
      title: "Express API with Swagger", // Title of the API
      version: "1.0.0", // Version of the API
      description: "API documentation for Express application with Swagger",
    },
    servers: [
      {
        url: "http://localhost:8000/api/v1", // URL of your server
      },
    ],
    paths: {
      "/object-remove": {
        post: {
          summary: "Upload an image",
          requestBody: {
            required: true,
            content: {
              "multipart/form-data": {
                schema: {
                  type: "object",
                  properties: {
                    sourceImage: {
                      type: "string",
                      format: "binary",
                    },
                    maskImage: {
                      type: "string",
                      format: "string",
                      description:
                        "Enter the base64-encoded string for the mask image",
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Image uploaded successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                      },
                      data: {
                        type: "object",
                        properties: {
                          status: {
                            type: "boolean",
                          },
                          order_status_code: {
                            type: "number",
                          },
                          order_id: {
                            type: "string",
                          },
                          task: {
                            type: "string",
                          },
                          order_status: {
                            type: "string",
                          },
                          output_urls: {
                            type: "array",
                            items: {
                              type: "string",
                            },
                          },
                          remainingCredits: {
                            type: "number",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Internal server error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: [],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
