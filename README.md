Convenient methods for handling [mysql2](https://www.npmjs.com/package/mysql2) query results. There are methods for dealing with a variety of expected results, which throw an error if the expectations are not met, and return the resulting query data.

### expectMultiResult(dbQueryData, throwError = true)

Expects an array of results, such as from a SELECT, not from using the mysql package multipleStatements option. An empty array counts as an expected result. Pass `false` as the second arg to not throw an error.

Returns the array of results.

### expectSingleResult(dbQueryData, throwError = true)

Expects a single result. Pass `false` as the second arg to not throw an error.

Returns the single result object.

### expectAffectedRows(dbQueryResult, number = null)

Expects `dbQueryResult.affectedRows` to be a number greater than zero, such as when executing a DELETE query. Optionally specify a number if expecting a specific number of affected rows.

Returns `undefined`.

### expectChangedRows(dbQueryResult, number = null)

Expects `dbQueryResult.changedRows` to be a number greater than zero, such as when executing an UPDATE query. Optionally specify a number if expecting a specific number of affected rows. Returns the query result data.

Returns `undefined`.