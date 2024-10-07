---
title: "A sample linux commands"
excerpt: "Why Linux is easy."
date: "2024-08-31"
author: "Javier Medina"
---

**⁠**

- **`ls -lh`**: Mostrar los permisos de archivos y directorios.
- **`chmod ugo+rwx directory1`**: Dar permisos de lectura, escritura y ejecución al usuario, grupo y otros en el directorio.
- **`chmod go-rwx directory1`**: Quitar permisos de lectura, escritura y ejecución al grupo y otros en el directorio.
- **`chown user1 file1`**: Cambiar el propietario de un fichero.
- **`chown -R user1 directory1`**: Cambiar el propietario de un directorio y sus contenidos de manera recursiva.
- **`chgrp group1 file1`**: Cambiar el grupo de un fichero.
- **`chown user1:group1 file1`**: Cambiar el usuario y el grupo propietario de un fichero.
- **`find / -perm -u+s`**: Buscar todos los ficheros del sistema con el bit SUID configurado.
- **`chmod u+s /bin/file1`**: Colocar el bit SUID en un fichero binario.
- **`chmod u-s /bin/file1`**: Deshabilitar el bit SUID en un fichero binario.
- **`chmod g+s /home/public`**: Colocar el bit SGID en un directorio.
- **`chmod g-s /home/public`**: Deshabilitar el bit SGID en un directorio.
- **`chmod o+t /home/public`**: Colocar el bit STICKY en un directorio (solo el propietario puede borrar archivos).
- **`chmod o-t /home/public`**: Deshabilitar el bit STICKY en un directorio.

### Comandos de Procesos

- **`top`**: Mostrar las tareas del sistema que están utilizando más CPU.
- **`ps -eafw`**: Mostrar las tareas del sistema.
- **`ps -e -o pid,args --forest`**: Mostrar las tareas del sistema en formato jerárquico.
- **`pstree`**: Mostrar un árbol de procesos del sistema.
- **`kill -9 ID_Proceso`**: Terminar un proceso forzadamente.
- **`kill -1 ID_Proceso`**: Recargar la configuración de un proceso.
- **`lsof -p $$`**: Mostrar una lista de ficheros abiertos por un proceso.
- **`lsof /home/user1`**: Mostrar una lista de ficheros abiertos en un directorio específico.

tipos de ls 

Los tipos más comunes de ls incluyen:

• ls -l: Muestra una lista detallada con permisos, propietario, grupo, tamaño y fecha de modificación.
• ls -a: Muestra todos los archivos, incluyendo los ocultos.
• ls -R: Lista el contenido de los subdirectorios de forma recursiva.

chmod sirve para 

modificar los permisos de archivos y directorios en sistemas Unix y Linux. Los permisos controlan quién puede leer, escribir o ejecutar un archivo. El comando chmod utiliza una notación numérica o simbólica para especificar los permisos. Por ejemplo, "chmod 755 archivo" otorga permisos de lectura, escritura y ejecución al propietario, y solo lectura y ejecución a otros usuarios.

tipos de numeros de permisos en chmod

Los números de permisos en chmod se basan en un sistema octal, donde cada dígito representa un conjunto de permisos para el propietario, grupo y otros usuarios. Los valores más comunes son:

• 7 (rwx): Lectura, escritura y ejecución
• 6 (rw-): Lectura y escritura
• 5 (r-x): Lectura y ejecución
• 4 (r--): Solo lectura
• 3 (-wx): Escritura y ejecución
• 2 (-w-): Solo escritura
• 1 (--x): Solo ejecución
• 0 (---): Sin permisos

Por ejemplo, para dar permisos de lectura y escritura al propietario, y solo lectura al grupo y otros, se usaría el comando "chmod 644 archivo". Es importante tener en cuenta que el uso incorrecto de chmod puede afectar la seguridad del sistema, por lo que se debe utilizar con precaución. Además, algunos sistemas pueden requerir privilegios de superusuario para modificar ciertos permisos.

Es importante destacar que el comando chmod también puede utilizarse con notación simbólica, lo que permite una mayor flexibilidad en la asignación de permisos. Por ejemplo, "chmod u+x archivo" agrega el permiso de ejecución para el propietario del archivo. Además, chmod puede aplicarse de forma recursiva a directorios y sus contenidos utilizando la opción -R, lo que es útil para modificar permisos en estructuras de directorios complejas.

que es sudo

Sudo (Superuser Do) es un comando en sistemas Unix y Linux que permite a los usuarios ejecutar programas con los privilegios de seguridad de otro usuario, por defecto el superusuario o root. Es una herramienta esencial para la administración del sistema, ya que permite realizar tareas que requieren permisos elevados sin necesidad de iniciar sesión como root. Sudo también proporciona un registro detallado de los comandos ejecutados, lo que mejora la seguridad y la capacidad de auditoría del sistema.

como crear un usuario en linux 

Para ver los usuarios en Linux, puedes utilizar varios comandos:

- **`cat /etc/passwd`**: Muestra todos los usuarios del sistema, incluyendo los usuarios del sistema y los usuarios normales.
- **`getent passwd`**: Similar a cat /etc/passwd, pero también muestra usuarios de servicios de directorio como LDAP.
- **`compgen -u`**: Muestra una lista simple de nombres de usuario.
- **`who`**: Muestra los usuarios actualmente conectados al sistema.
- **`w`**: Similar a who, pero proporciona más información sobre la actividad de los usuarios.

Estos comandos proporcionan diferentes niveles de detalle y pueden ser útiles en diferentes situaciones de administración del sistema.

como matar un proceso con top

Para matar un proceso usando top, sigue estos pasos:

1. Ejecuta el comando top para ver la lista de procesos en ejecución.
2. Localiza el proceso que deseas terminar y anota su PID (ID del proceso).
3. Presiona la tecla 'k' (kill) mientras estás en top.
4. Ingresa el PID del proceso que quieres terminar cuando se te solicite.
5. Confirma la acción presionando Enter.

un ejemplo de top 

ejemplo simplificado de la salida del comando top:

PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
    1 root      20   0  168944   9136   6716 S   0.0   0.2   0:02.33 systemd
  954 root      20   0   44016   3728   3140 S   0.0   0.1   0:00.06 sshd
 1256 user1     20   0   21924   2660   2340 R   0.3   0.1   0:00.01 top

Este ejemplo muestra los procesos en ejecución, sus PIDs, usuarios, uso de CPU y memoria, entre otra información útil para el monitoreo del sistema.


