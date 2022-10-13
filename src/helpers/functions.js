export const formatToSelect = (arrayToFormat, id, value, extra) => {
  let arrayToOutput = []
  if (Array.isArray(arrayToFormat)) {
    if (arrayToFormat?.length > 0) {
      arrayToFormat?.forEach(item => {
        arrayToOutput.push({
          label: item[value],
          value: item[id],
          extra: extra ? item[extra] : '',
        })
      })
    }
  }
  return arrayToOutput
}
