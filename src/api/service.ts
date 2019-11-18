import axios from '../lib/axios'
import {
  getIndexDataPath,
} from './api'
import { 
  IndexDataReqInterface,
} from './interfaces'

export const getIndexData = async (payload = {}): Promise<any> => {
  const response: IndexDataReqInterface = await axios(getIndexDataPath, payload, 'get')
  return response
}
