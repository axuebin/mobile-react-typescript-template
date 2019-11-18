const base = process.env.NODE_ENV === 'development' ? 'http://localhost:3003' : ''

export const getIndexDataPath = `${base}/index`