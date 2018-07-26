# reactjs
reactjs training


import java.util.jar.*;
import java.util.Enumeration;
import java.io.*;

public class ReadJarFile
{
   
   public static void main(String args[])
   {
      ReadJarFile readJarFile = new ReadJarFile();
      readJarFile.process();
   }

   private void process()
   {
      try{   
         //JarFile jarFile = new JarFile("C:\\Program Files\\Java\\jdk-10.0.2\\lib\\deploy.jar");  
	JarFile jarFile = new JarFile("C:\\Users\\admin\\Downloads\\helloworld.war");
         Enumeration enumOfJar = jarFile.entries();   
         while (enumOfJar.hasMoreElements()) {
	 String s = enumOfJar.nextElement().toString();
//            System.out.println(s);   
//            System.out.println(s.lastIndexOf("/"));   
            System.out.println(s.substring(s.lastIndexOf("/")+1, s.length()));   
         } 
      }catch(IOException ioe)
      {
         System.out.println("IOException: " + ioe);
      }
   }
}
