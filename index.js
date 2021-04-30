class DbNoResultsError extends Error {}
class DbInvalidChangedRowsError extends Error {}
class DbInvalidAffectedRowsError extends Error {}
class DbInsertIdError extends Error {}
class DbInvalidResultError extends Error {}

function expectMultiResult(dbQueryResult, throwError = true) {
  if (!dbQueryResult) {
    throw new DbInvalidResultError();
  }
  if (throwError && !dbQueryResult[0]) {
    console.error(dbQueryResult);
    throw new DbNoResultsError();
  }
  return dbQueryResult[0];
}

function expectSingleResult(dbQueryResult, throwError = true) {
  const results = expectMultiResult(dbQueryResult, throwError);
  const [result] = results;

  if (throwError && !result) {
    throw new DbNoResultsError();
  }
  return result;
}

function expectChangedRows(dbQueryResult, number = null) {
  const result = expectMultiResult(dbQueryResult);
  const { changedRows } = result;

  if (
    (number && changedRows !== number) ||
    !changedRows
  ) {
    console.error('changedRows:', changedRows, 'expected:', number);
    throw new DbInvalidChangedRowsError();
  }
}

function expectAffectedRows(dbQueryResult, number = null) {
  const result = expectMultiResult(dbQueryResult);
  const { affectedRows } = result;

  if (
    (number && affectedRows !== number) ||
    !affectedRows
  ) {
    console.error('affectRows:', affectedRows, 'expected:', number);
    throw new DbInvalidAffectedRowsError();
  }
}

module.exports = {
  expectMultiResult,
  expectSingleResult,
  expectChangedRows,
  expectAffectedRows,
  DbNoResultsError,
  DbInvalidChangedRowsError,
  DbInvalidAffectedRowsError,
  DbInsertIdError,
  DbInvalidResultError
};