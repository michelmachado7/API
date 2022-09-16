﻿using App.Aplicattion.Services;
using App.Domain.Interfaces.Application;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Aplicattion;

public class DependencyInjectionConfig
{
    public static void Inject(IServiceCollection service)
    {
        service.AddTransient<ICidadeService, CidadeService>();
    }
}
