--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: shared_tasks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shared_tasks (
    id_user integer NOT NULL,
    id_task integer NOT NULL
);


ALTER TABLE public.shared_tasks OWNER TO postgres;

--
-- Name: tasks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tasks (
    id_task integer NOT NULL,
    id_client integer NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    title text,
    status character varying(50) DEFAULT 'A faire'::character varying
);


ALTER TABLE public.tasks OWNER TO postgres;

--
-- Name: tasks_id_task_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tasks_id_task_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tasks_id_task_seq OWNER TO postgres;

--
-- Name: tasks_id_task_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tasks_id_task_seq OWNED BY public.tasks.id_task;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text,
    password text,
    pseudo text,
    name text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: tasks id_task; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasks ALTER COLUMN id_task SET DEFAULT nextval('public.tasks_id_task_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: shared_tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shared_tasks (id_user, id_task) FROM stdin;
2	55
2	57
3	57
2	58
3	58
2	70
2	72
\.


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tasks (id_task, id_client, date, title, status) FROM stdin;
55	1	2024-12-29 13:06:14.657	Finish Final Project	todo
56	1	2024-12-29 13:09:13.317	Grocery Shopping	in-progress
57	1	2024-12-29 13:11:03.675	Doctor appointment	done
58	1	2024-12-29 17:02:01.803	m	todo
59	1	2024-12-29 17:54:41.405	u	todo
60	1	2024-12-29 18:14:00.514	partage	todo
70	2	2024-12-29 18:14:00.514	partage	todo
71	1	2024-12-29 18:27:49.594	test final	todo
72	2	2024-12-29 18:27:49.594	test final	done
73	2	2024-12-29 18:29:38.727	p	todo
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, pseudo, name) FROM stdin;
1	helo@gmail.com		helooop	Heloise
2	tom93	1	tom	tom
3	mat	1	d	h
4	t	1	f	h
\.


--
-- Name: tasks_id_task_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tasks_id_task_seq', 73, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: shared_tasks shared_tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shared_tasks
    ADD CONSTRAINT shared_tasks_pkey PRIMARY KEY (id_user, id_task);


--
-- Name: tasks tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id_task);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: tasks fk_id_client; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT fk_id_client FOREIGN KEY (id_client) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: shared_tasks fk_task; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shared_tasks
    ADD CONSTRAINT fk_task FOREIGN KEY (id_task) REFERENCES public.tasks(id_task);


--
-- Name: shared_tasks fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shared_tasks
    ADD CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

