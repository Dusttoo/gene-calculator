from collections import Counter
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import db

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "https://gene-calculator-web-14271e2fb13f.herokuapp.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/api/users")
def get_users():
    users = db.sql('SELECT * FROM geney.Users ORDER BY first_name DESC')
    return users

@app.post("/api/gene-calculator")
def get_gene_calculations(genes: list[list[str]]):
    gene_calculations = {}
    # Finds all possible combinations of each gene
    def find_all_pairs(genes):
        combos = []
        for i in range(len(genes)):
            for gene in genes:
                temp_combo = [genes[i], gene]
                combos.append(''.join(sorted(temp_combo)))
        return (combos)


    for gene_set in genes:
        pairs = find_all_pairs(gene_set)

        # Calculates the percentage of each combination
        counted_pairs = Counter(pairs)
        for k, v in counted_pairs.items():
            gene_calculations[k] = round(v/len(pairs), 2)
    return gene_calculations
