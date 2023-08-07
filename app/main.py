from collections import Counter
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import db
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def app_status():
    return "Here is some data"

@app.get("/users")
def get_users():
    users = db.sql('SELECT * FROM geney.Users ORDER BY first_name DESC')
    return users

@app.post("/gene-calculator")
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
        print(gene_set)
        pairs = find_all_pairs(gene_set)

        # Calculates the percentage of each combination
        counted_pairs = Counter(pairs)
        for k, v in counted_pairs.items():
            gene_calculations[k] = v
            # return f'{k} : {round(v/len(pairs), 2)}'
    return gene_calculations
