/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Events
 * Api para gerenciamento de eventos
 * OpenAPI spec version: 1
 */
export interface User {
  id?: number;
  name?: string;
  email?: string;
}

export interface Event {
  eventId?: number;
  title?: string;
  prettyName?: string;
  location?: string;
  price?: number;
  startDate?: string;
  endDate?: string;
  startTime?: LocalTime;
  endTime?: LocalTime;
}

export interface LocalTime {
  hour?: number;
  minute?: number;
  second?: number;
  nano?: number;
}

export type CreateSubscription200 = { [key: string]: unknown };

export type CreateSubscription400 = { [key: string]: unknown };

export type CreateSubscription422 = { [key: string]: unknown };

export type CreateSubscription500 = { [key: string]: unknown };

export type CreateSubscription1200 = { [key: string]: unknown };

export type CreateSubscription1400 = { [key: string]: unknown };

export type CreateSubscription1422 = { [key: string]: unknown };

export type CreateSubscription1500 = { [key: string]: unknown };

export type GenerateRankingByEvent200 = { [key: string]: unknown };

export type GenerateRankingByEvent400 = { [key: string]: unknown };

export type GenerateRankingByEvent422 = { [key: string]: unknown };

export type GenerateRankingByEvent500 = { [key: string]: unknown };

export interface GenerateRankingByEventandUser200 {
  item: {
    Subscribers: number;
    userId: number;
    name: string;
  };
  position: number;
}

export type GenerateRankingByEventandUser400 = { [key: string]: unknown };

export type GenerateRankingByEventandUser422 = { [key: string]: unknown };

export type GenerateRankingByEventandUser500 = { [key: string]: unknown };



/**
 * @summary Realiza a insçriçao em um evento com indicação
 */
export const getCreateSubscriptionUrl = (prettyName: string,
    userId: number,) => {


  return `http://localhost:8080/open-api/subscription/${prettyName}/${userId}`
}

export const createSubscription = async (prettyName: string,
    userId: number,
    user: User, options?: RequestInit): Promise<CreateSubscription200> => {
  
  const res = await fetch(getCreateSubscriptionUrl(prettyName,userId),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      user,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CreateSubscription200 = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Realiza a insçriçao em um evento
 */
export const getCreateSubscription1Url = (prettyName: string,) => {


  return `http://localhost:8080/open-api/subscription/${prettyName}`
}

export const createSubscription1 = async (prettyName: string,
    user: User, options?: RequestInit): Promise<CreateSubscription1200> => {
  
  const res = await fetch(getCreateSubscription1Url(prettyName),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      user,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CreateSubscription1200 = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Lista os eventos cadastrados
 */
export const getGetAllEventsUrl = () => {


  return `http://localhost:8080/open-api/events`
}

export const getAllEvents = async ( options?: RequestInit): Promise<Event[]> => {
  
  const res = await fetch(getGetAllEventsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: Event[] = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Realiza o cadastro de um novo evento
 */
export const getAddNewEventUrl = () => {


  return `http://localhost:8080/open-api/events`
}

export const addNewEvent = async (event: Event, options?: RequestInit): Promise<Event> => {
  
  const res = await fetch(getAddNewEventUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      event,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: Event = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Lista os usuarios pelo ranking
 */
export const getGenerateRankingByEventUrl = (prettyName: string,) => {


  return `http://localhost:8080/open-api/subscription/${prettyName}/ranking`
}

export const generateRankingByEvent = async (prettyName: string, options?: RequestInit): Promise<GenerateRankingByEvent200> => {
  
  const res = await fetch(getGenerateRankingByEventUrl(prettyName),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GenerateRankingByEvent200 = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Mostra a posição de um determinado usuario no ranking
 */
export const getGenerateRankingByEventandUserUrl = (prettyName: string,
    userId: number,) => {


  return `http://localhost:8080/open-api/subscription/${prettyName}/ranking/${userId}`
}

export const generateRankingByEventandUser = async (prettyName: string,
    userId: number, options?: RequestInit): Promise<GenerateRankingByEventandUser200> => {
  
  const res = await fetch(getGenerateRankingByEventandUserUrl(prettyName,userId),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GenerateRankingByEventandUser200 = body ? JSON.parse(body) : {}

  return data
}



/**
 * @summary Lista os eventos cadastrados pelo nome
 */
export const getGetEventByPrettyNameUrl = (prettyName: string,) => {


  return `http://localhost:8080/open-api/events/${prettyName}`
}

export const getEventByPrettyName = async (prettyName: string, options?: RequestInit): Promise<Event> => {
  
  const res = await fetch(getGetEventByPrettyNameUrl(prettyName),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: Event = body ? JSON.parse(body) : {}

  return data
}



