package com.mastercard.bidex.config;  
  
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
  
@Configuration 
@ComponentScan("com.mastercard.bidex.controller") 
@EnableWebMvc   
public class AppConfig {  

}  
