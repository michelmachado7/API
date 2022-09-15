using App.Domain.Entities;
using App.Domain.Interfaces.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Application.Services
{
    public class CidadeService : ICidadeService
    {
        public Cidade BuscaPorCep(string cep)
        {
            
        }

        public List<Cidade> ListaCidades(string cep, string nome)
        {
            throw new NotImplementedException();
        }

        public void Remover(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Salvar(Cidade obj)
        {
            throw new NotImplementedException();
        }
    }
}
