using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccountDashboard.Data.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private AccountDBContext dbContext;
        public UnitOfWork()
        {
            dbContext = dbContext ?? new AccountDBContext();
        }
        public void SaveChanges()
        {
            dbContext.SaveChanges();
        }
    }
}
