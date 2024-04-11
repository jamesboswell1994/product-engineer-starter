from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.case_router import case_router

app = FastAPI()

app.include_router(case_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}