#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#define FILE_NAME "/tmp/hacked2.txt"

void _init() {
    unsetenv("LD_PRELOAD");
    FILE* file_ptr = fopen(FILE_NAME, "w");
    fclose(file_ptr);
}
