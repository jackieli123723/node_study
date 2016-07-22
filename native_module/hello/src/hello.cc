#include <nan.h>
#include "win32-code.h"

// return test
void getString(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::New("Arick").ToLocalChecked());
}

void getNumber(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::New(100));
}

void getUndefined(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::Undefined());
}

void getNull(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::Null());
}

void getTrue(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::True());
}

void getFalse(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::False());
}

// raise error
void raiseError(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  Nan::ThrowError("raise error by Arick");
}

// int + int
void addTwo(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  int a = info[0]->Int32Value();
  int b = info[1]->Int32Value();
  int r = a+b;  
  info.GetReturnValue().Set(Nan::New(r));
}

void not(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  bool a = info[0]->BooleanValue ();
  info.GetReturnValue().Set(Nan::New(!a));
}

void pow2(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    double a = info[0]->NumberValue();
    info.GetReturnValue().Set(Nan::New(a*a));
}


NAN_METHOD(Hello) {
    info.GetReturnValue().Set(Nan::New(99));
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(
        Nan::New("getString").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(getString)->GetFunction()
    );
    exports->Set(
        Nan::New("getNumber").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(getNumber)->GetFunction()
    );
    exports->Set(
        Nan::New("getUndefined").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(getUndefined)->GetFunction()
    );
    exports->Set(
        Nan::New("getNull").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(getNull)->GetFunction()
    );
    exports->Set(
        Nan::New("getTrue").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(getTrue)->GetFunction()
    );
    exports->Set(
        Nan::New("getFalse").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(getFalse)->GetFunction()
    );
    exports->Set(
        Nan::New("raiseError").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(raiseError)->GetFunction()
    );
    exports->Set(
        Nan::New("addTwo").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(addTwo)->GetFunction()
    );
    exports->Set(
        Nan::New("not").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(not)->GetFunction()
    );
    exports->Set(
        Nan::New("pow2").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(pow2)->GetFunction()
    );
    exports->Set(
        Nan::New("Hello").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(Hello)->GetFunction()
    );
}

NODE_MODULE(hello, Init)