

export interface Post {
    id: string;
    title: string;
    description: string;
    published: boolean;
  }
  

  export const API_URL = '';

  export const fetchData = async (endpoint : string): Promise<Post[] | null> =>{
    try {
            const response = await fetch(`${API_URL}/${endpoint}`)
        if(!response.ok) {
            throw new Error('Erro ao acessar a API');
        }
    } catch (error) {
        console.error('Erro: ', error);
        return null;
    }
  };