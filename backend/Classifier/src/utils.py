from typing import List

def dask_example(df):
    """Example: how to distribute preprocessing using Dask DataFrame."""
    try:
        import dask.dataframe as dd
    except Exception:
        raise RuntimeError('dask not installed')
    # convert pandas to dask
    ddf = dd.from_pandas(df, npartitions=8)
    return ddf


def mongo_store_example(records, mongo_uri='mongodb://localhost:27017', db='reviews', collection='preprocessed'):
    try:
        from pymongo import MongoClient
    except Exception:
        raise RuntimeError('pymongo not installed')
    client = MongoClient(mongo_uri)
    coll = client[db][collection]
    coll.insert_many(records)
