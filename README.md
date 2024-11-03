# YAPPY SDK

Este repositorio se creó con la intención de almacenar versiones del SDK de Yappy tanto del backed como del frontend, además de que permite la  intalación de cada paquete de manera modular.

### Instalación
Para instalar una versión específica del SDK en tu proyecto npm  (sin instalar el repositorio completo), utiliza los siguientes comandos:

- Frontend
```sh
npm install 'https://gitpkg.vercel.app/jecsham/yappy-sdk/frontend/yappy-js-front-sdk-1.1.200/package?main'
```
- Backend
```sh
npm install 'https://gitpkg.vercel.app/jecsham/yappy-sdk/backend/yappy-node-back-sdk-1.1.222/package?main'
```

### Uso
Una vez el sdk deseado esté instalado en sus proyectos, pueden continuar con la [documentación oficial SDK de Botón de Pago Yappy para Node.js](https://www.yappy.com.pa/comercial/desarrolladores/boton-de-pago-yappy/sdk-node-js/)
### Notas
- Para instalar paquetes desde subcarpetas de un repositorio, se utiliza el servicio de terceros [gitpkg.vercel.app](https://gitpkg.vercel.app), ya que GitHub no cuenta con esta funcionalidad de forma predeterminada.
- Este repositorio facilita la distribución del SDK a los desarrolladores, dado que Yappy no publica actualmente sus SDK en NPM.
- El propietario de este repositorio no está afiliado a Yappy S.A. ni a Banco General S.A.
