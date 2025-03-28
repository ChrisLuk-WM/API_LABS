PGDMP  %    -                }            lab    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16388    lab    DATABASE     }   CREATE DATABASE lab WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.950';
    DROP DATABASE lab;
                     postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        pg_database_owner    false    4            �            1259    16392    Articles    TABLE       CREATE TABLE public."Articles" (
    id numeric NOT NULL,
    title text NOT NULL,
    "allText" text NOT NULL,
    summary text,
    "dateCreated" date,
    "dateModified" date,
    "imageURL" text,
    published boolean DEFAULT false,
    "authorId" numeric
);
    DROP TABLE public."Articles";
       public         heap r       postgres    false    4            �            1259    16400    Users    TABLE       CREATE TABLE public."Users" (
    id numeric NOT NULL,
    "firstName" text,
    "lastName" text,
    username text NOT NULL,
    about text,
    "dateRegistered" date,
    password text NOT NULL,
    "passwordSalt" text NOT NULL,
    email text NOT NULL,
    "avatarURL" text
);
    DROP TABLE public."Users";
       public         heap r       postgres    false    4            �          0    16392    Articles 
   TABLE DATA           �   COPY public."Articles" (id, title, "allText", summary, "dateCreated", "dateModified", "imageURL", published, "authorId") FROM stdin;
    public               postgres    false    217   J       �          0    16400    Users 
   TABLE DATA           �   COPY public."Users" (id, "firstName", "lastName", username, about, "dateRegistered", password, "passwordSalt", email, "avatarURL") FROM stdin;
    public               postgres    false    218   �       &           2606    16399    Articles Articles_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Articles"
    ADD CONSTRAINT "Articles_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Articles" DROP CONSTRAINT "Articles_pkey";
       public                 postgres    false    217            (           2606    16406    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public                 postgres    false    218            *           2606    16467    Users em 
   CONSTRAINT     F   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT em UNIQUE (email);
 4   ALTER TABLE ONLY public."Users" DROP CONSTRAINT em;
       public                 postgres    false    218            ,           2606    16433    Users un 
   CONSTRAINT     I   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT un UNIQUE (username);
 4   ALTER TABLE ONLY public."Users" DROP CONSTRAINT un;
       public                 postgres    false    218            -           2606    16407    Articles fk    FK CONSTRAINT     {   ALTER TABLE ONLY public."Articles"
    ADD CONSTRAINT fk FOREIGN KEY ("authorId") REFERENCES public."Users"(id) NOT VALID;
 7   ALTER TABLE ONLY public."Articles" DROP CONSTRAINT fk;
       public               postgres    false    218    4648    217            �   1   x�3�LLJ�?J�4�2��(c#C4y#.c��\&�c���� ^Bl      �   6   x�3�LL���C!c�@*�i�pq����V��e�F�&�f�I�� u1z\\\  �     