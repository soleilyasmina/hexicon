export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}
export const sortByCreatedTime = (records) => {
  return records.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));
}
