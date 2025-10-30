# Instalação
Em alguns casos, pode ocorrer conflito de dependências, como por exemplo com o pacote `graphql`.

Para contornar esse problema, utilize o comando abaixo para instalar os pacotes ignorando conflitos de dependências:
```bash
npm install --legacy-peer-deps
```


## Configuração - Debug_

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug GraphQL",
            "runtimeExecutable": "npm",
            "runtimeArgs": ["start"],
            "console": "integratedTerminal",
            "serverReadyAction": {
                "pattern": "Servidor sendo executado em (https?://\\S+)",
                "uriFormat": "%s",
                "action": "openExternally"
            }
        }
    ]
}
```
