import azure.functions as func
import json
import logging

app = func.FunctionApp()

@app.route(route="story", auth_level=func.AuthLevel.ANONYMOUS)
def story(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    return func.HttpResponse(
        json.dumps(
            { "message": "Hello World"}
        ),
        mimetype="application/json",
        status_code=200
    )