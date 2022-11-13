import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hola, Soy un desarrollador web 
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Israel De León
          </Heading>
          <p>Estudiante ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre Mí
        </Heading>
        <Paragraph>
          Soy un estudiante de la carrera de ingeniería en sistemas{' '}
          &quot; en la universidad Mariano Galvéz de Guatemala &quot;
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="https://github.com/Alterlapsus" target="_blank" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biografía
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Guatemala.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Complete mi bachillerato en Ciencias y Letras en el colegio Juan
          José Arévalo Bermejo
        </BioSection>
        <BioSection>
          <BioYear>2022 en el presente</BioYear>
          Trabajando Para UNI SA (Desarrollador Web)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Mis Redes
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Alterlapsus" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Alterlapsus
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/israel-de-leon/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @Linkedin 
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Ruben96Israel" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @Ruben96Israel
              </Button>
            </Link>
          </ListItem>
         
        </List>

        <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        SEGURIDAD WEB - CONTINGENCIAS
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading style={{color: '#f2e0bc'}} as="h2" variant="page-title">
          Top 10 de OWASP 2021
          </Heading>
          <p style={{color: '#f2e0bc'}} >Seguridad Web ( Problemas de seguridad críticos / Implementación de Mitigaciones )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
     
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Problema
        </Heading>
        <Paragraph>
        Hoy en día en Guatemala solo las instituciones bancarías u empresas grandes que manejan gran afluencia de datos se preocupan por su seguridad en la red y la de sus usuarios, es por ello que se realiza una investigación acerca de las 10 amenazas basándonos en El OWASP Top 10 es un libro/documento de referencia que resume los 10 problemas de seguridad más críticos para la seguridad de las aplicaciones web su última actualización fue el 2021.
<br />
<br />
        Es de vital importancia la concientización acerca de los peligros de la red es sumamente importantes, ya que no solo basta con conocer el top 10 de las amenazas más críticas, sino también el poder elaborar planes de mitigación, con el fin de poder contrarrestar estás amenazas son de suma importancia. 

        </Paragraph>
        <Box align="center" my={4}>
          <Link href="https://owasp.org/Top10/es/" target="_blank" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              ACERCA DE OWASP TOP 10
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A1.  Pérdida de control de acceso
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>
        Implemente mecanismos de control de acceso una única vez y reutilícelos en toda la aplicación, incluyendo la minimización del uso de CORS.
        El control de acceso debe implementar su cumplimiento a nivel de dato y no permitir que el usuario pueda crear, leer, actualizar o borrar cualquier dato. <br />

        Los modelos de dominio deben hacer cumplir los requisitos únicos de límite de negocio de aplicaciones. <br /> <br />

        Deshabilite el listado de directorios del servidor web y asegúrese de que los archivos de metadatos (por ejemplo una carpeta .git) y archivos de respaldo no puedan ser accedidos a partir de la raíz del sitio web.

<br />
<br />
        Registre las fallas de control de acceso (loggin), alertando a los administradores cuando sea apropiado (por ejemplo, fallas repetidas). <br /> <br />

        Establezca límites a la tasa de accesos permitidos a APIs y controladores de forma de poder minimizar el daño provocado por herramientas automatizadas de ataque. <br /> <br />

        Los identificadores de sesiones deben invalidarse en el servidor luego de cerrar la sesión. Los tokens JWT deberían ser preferiblemente de corta duración para minimizar la ventana de oportunidad de ataque. Para tokens JWT de mayor duración, es sumamente recomendable seguir los estándares de OAuth de revocación de acceso. <br /> <br />


        </Paragraph>
      </Section>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A2. Fallas Criptográficas
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad? / Estrategia De Prevención</p>
        <br />
        <Paragraph>
        Clasifique los datos procesados, almacenados o transmitidos por una aplicación. Identifique qué datos son confidenciales de acuerdo con las leyes de privacidad, los requisitos reglamentarios o las necesidades comerciales.
        <br /> <br />
        No almacene datos sensibles innecesariamente. Descártelos lo antes posible o utilice una utilización de tokens compatible con PCI DSS o incluso el truncamiento. Los datos que no se conservan no se pueden robar.
        <br /> <br />
        Asegúrese de cifrar todos los datos sensibles en reposo (almacenamiento).
        <br /> <br />
        Garantice la implementación de algoritmos, protocolos y claves que utilicen estándares sólidos y actualizados; utilice una gestión de claves adecuada.
        <br /> <br />
        Cifre todos los datos en tránsito con protocolos seguros como TLS con cifradores de confidencialidad adelantada (forward secrecy, o FS), priorización de cifradores por parte del servidor y parámetros seguros. Aplique el cifrado mediante directivas como HTTP Strict Transport Security (HSTS).
        <br /> <br />
        Deshabilite el almacenamiento en caché para respuestas que contengan datos sensibles.
        <br /> <br />
        Aplique los controles de seguridad requeridos según la clasificación de los datos.
        <br /> <br />
        No utilice protocolos antiguos como FTP y SMTP para transportar datos sensibles.


        </Paragraph>
      </Section>


      
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A3. Inyección
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>
        La opción preferida es utilizar una API segura, que evite el uso de un intérprete por completo y proporcione una interfaz parametrizada o utilizar una herramienta de ORM.

        Nota: Incluso cuando se parametrizan, los procedimientos almacenados pueden introducir una inyección SQL si el procedimiento PL/SQL o T-SQL concatena consultas y datos, o se ejecutan parámetros utilizando EXECUTE IMMEDIATE o exec(). <br />

        Implemente validaciones de entradas de datos en el servidor, utilizando listas blancas. De todos modos, esto no es una defensa completa, ya que muchas aplicaciones requieren el uso de caracteres especiales, como en campos de texto o APIs para aplicaciones móviles. <br />

        Para cualquier consulta dinámica restante, escape caracteres especiales utilizando la sintaxis de caracteres específica para el intérprete que se trate.


        </Paragraph>
      </Section>


           
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A4.  Diseño Inseguro
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>

        Establezca y use un ciclo de desarrollo seguro apoyado en Profesionales en Seguridad de Aplicaciones para ayudarlo a evaluar y diseñar la seguridad y controles relacionados con la privacidad. <br />

        Establezca y utilice un catálogo de patrones de diseño seguros o componentes de camino pavimentado listos para ser utilizados. <br />

        Utilice el modelado de amenazas para flujos críticos de autenticación, control de acceso, lógica de negocio y todo clave. <br />

        Integre el lenguaje y los controles de seguridad en las historias de usuario.



        </Paragraph>
      </Section>


     
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A5. Configuración de Seguridad Incorrecta
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>

        Deben implementarse procesos de instalación seguros, incluyendo:
        <br />
        Un proceso de hardening repetible agiliza y facilita la implementación de otro entorno que esté debidamente inaccesible. Los entornos de desarrollo, control de calidad y producción deben configurarse de forma idéntica, con diferentes credenciales utilizadas en cada uno. Este proceso debe automatizarse para minimizar el esfuerzo necesario para configurar un nuevo entorno seguro.
        <br />
        Una plataforma mínima sin funciones, componentes, documentación ni ejemplos innecesarios. Elimine o no instale características y frameworks no utilizados.



        </Paragraph>
      </Section>


     
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A6. Componentes Vulnerables y Desactualizados
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>

        Debe existir un proceso de administración de parches que: <br />

        Elimine las dependencias que no son utilizadas, funcionalidades, componentes, archivos y documentación innecesarios. <br />

        Realice un inventario continuo de las versiones de los componentes en el cliente y en el servidor (por ejemplo, frameworks, bibliotecas) y sus dependencias utilizando herramientas como: versions, OWASP Dependency Check, retire.js, etc. Supervise continuamente fuentes como Common Vulnerability and Exposures (CVE) y National Vulnerability Database (NVD) para detectar vulnerabilidades en los componentes. Utilice herramientas de análisis de composición de software para automatizar el proceso. Suscríbase para recibir alertas por correo electrónico sobre vulnerabilidades de seguridad relacionadas con los componentes que utiliza. <br />

        Solo obtenga componentes de fuentes oficiales a través de enlaces seguros. Prefiera los paquetes firmados para reducir la posibilidad de incluir un componente malicioso modificado. <br />


        </Paragraph>
      </Section>



     
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A7. Fallas de Identificación y Autenticación
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>
        No incluya o implemente en su software credenciales por defecto, particularmente para usuarios administradores. <br />

        Implemente un control contra contraseñas débiles, tal como verificar que una nueva contraseña o la utilizada en el cambio de contraseña no esté incluida en la lista de las 10,000 peores contraseñas. <br />

        Alinear las políticas de largo, complejidad y rotación de las contraseñas con las pautas de la sección 5.1.1 para Secretos Memorizados de la guía del NIST 800-63b u otras políticas de contraseñas modernas, basadas en evidencias. <br />

        Asegúrese que el registro, la recuperación de las credenciales y el uso de APIs, no permiten los ataques de enumeración de usuarios, mediante la utilización de los mismos mensajes genéricos en todas las salidas.<br />



        </Paragraph>
      </Section>



     
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A8. Fallas en el Software y en la Integridad de los Datos
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>

        Utilice firmas digitales o mecanismos similares para verificar que el software o datos provienen efectivamente de la fuente esperada y no fueron alterados. <br />

        Asegúrese que las bibliotecas y dependencias, tales como npm o maven son utilizadas desde repositorios confiables. Si su perfil de riesgo es alto, considere alojarlas en un repositorio interno cuyo contenido ha sido previamente analizado. <br />

       Asegúrese que se utilice una herramienta de análisis de componentes de terceros, cómo OWASP Dependency Check u OWASP CycloneDX, con el fin de verificar la ausencia de vulnerabilidades conocidas. <br />


        </Paragraph>
      </Section>


     
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        A9 Fallas en el Registro y Monitoreo
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>

        Los desarrolladores deberían implementar algunos o todos los siguientes controles, dependiendo del riesgo de la aplicación: <br />

       Asegúrese de que todos los errores de inicio de sesión, de control de acceso y de validación de entradas de datos del lado del servidor se pueden registrar con suficiente contexto como para identificar cuentas sospechosas o maliciosas y mantenerlo durante el tiempo suficiente para permitir un posterior análisis forense.<br />

      Asegúrese de que los registros se generen en un formato fácil de procesar por las herramientas de gestión de registros.<br />


        </Paragraph>
      </Section>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
       A10 Falsificación de Solicitud del Lado del Servidor (SSRF)
        </Heading>
        <p style={{color: '#f2e0bc'}} >¿Cómo podemos mitigar este problema de seguridad?</p>
        <br />
        <Paragraph>

        Los desarrolladores pueden prevenir SSRF implementando algunos o todos los siguientes controles de defensa en profundidad: <br />
        <br />

        <p style={{color: '#f2e0bc'}} >Desde la capa de red: </p>
        
        <br />
        Segmente la funcionalidad de acceso a recursos remotos en redes separadas para reducir el impacto de SSRF

        Haga cumplir las políticas de firewall denegar por defecto o las reglas de control de acceso a la red para bloquear todo el tráfico de la intranet excepto el esencial.<br /><br />
        Consejos: 
        Establezca la propiedad y un ciclo de vida para las reglas de firewall basadas en aplicaciones.<br /><br />

        <p style={{color: '#f2e0bc'}} >Desde la capa de aplicación:</p>
        <br /><br />
        
        Sanitice y valide todos los datos de entrada proporcionados por el cliente.
      
        Haga cumplir el esquema de URL, el puerto y destino a través de una lista positiva de items permitidos.
        <br />
        No envíe respuestas en formato crudo a los clientes.
        <br />
        Deshabilite las redirecciones HTTP.
        <br />
        Tenga en cuenta la coherencia de la URL para evitar ataques como el enlace de DNS y las condiciones de carrera de tiempo de verificación, tiempo de uso (TOCTOU por sus siglas en inglés)
        <br />
        No mitigue SSRF mediante el uso de una lista de denegación o una expresión regular. Los atacantes poseen listas de payloads, herramientas y habilidades para eludir las listas de denegación.


        </Paragraph>
      </Section>
       
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
