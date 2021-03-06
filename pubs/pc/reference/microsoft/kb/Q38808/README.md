---
layout: page
title: "Q38808: Error L1072 Common Area Longer than 65536 Bytes"
permalink: /pubs/pc/reference/microsoft/kb/Q38808/
---

## Q38808: Error L1072 Common Area Longer than 65536 Bytes

	Article: Q38808
	Version(s): 5.00 5.10 | 5.10
	Operating System: MS-DOS    | OS/2
	Flags: ENDUSER | s_pascal h_fortran h_masm s_quickc s_link s_error
	Last Modified: 12-JAN-1989
	
	The following error is from "Linker Error Messages" in (1) the manual
	"CodeView and Utilities," Section C.2, Page 364, and in (2) the
	"Microsoft QuickC Compiler Programmer's Guide," Section D.4, Page 369:
	
	L1072       common area longer than 65536 bytes
	
	(1)         The program had more than 64K of communal variables. This
	            error cannot appear with object files generated by the
	            Microsoft Macro Assembler, MASM. It occurs only with
	            programs produced by the Microsoft FORTRAN or C Compilers
	            or other compilers that support communal variables.
	
	(2)         The program had more than 64K of communal variables. This
	            error cannot appear with object files generated by the
	            Microsoft Macro Assembler, MASM. It occurs only with
	            programs produced by the Microsoft QuickC Compiler or
	            other compilers that support communal variables.
	
	Fatal errors cause the linker to stop execution. Fatal error messages
	have the following format:
	
	   location : fatal error L1xxx: messagetext
	
	In these messages, location is the input file associated with the
	error, or LINK if there is no input file. If the input file is an OBJ
	or LIB file and has a module name, the module name is enclosed in
	parentheses.
	
	Use a large data model (compact, large, or huge). Try applying the /Gt
	compilation option to lower the threshhold.
