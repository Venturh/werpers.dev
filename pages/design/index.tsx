import { Logo } from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';

const Design = () => {
  return (
    <DefaultLayout>
      <DesignLayout title="design" subtitle="designSub">
        <div className="space-y-2">
          <div className="space-y-2">
            <div className="p-4 px-12 space-y-4 shadow-sm sm:w-1/2 bg-primary">
              <div className="flex items-center justify-between ">
                <span className="w-3 h-3 rounded-full bg-brand" />
                <div className="flex items-center space-x-1">
                  <div className="flex mr-1 space-x-1">
                    <span className="w-4 h-1.5 bg-accent rounded-lg" />
                    <span className="w-4 h-1.5 bg-accent rounded-lg" />
                    <span className="w-4 h-1.5 bg-accent rounded-lg" />
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
              </div>
              <div className="h-24 px-4 space-y-4">
                <div className="flex space-x-2">
                  <span className="w-12 h-2 rounded-lg bg-accent" />
                  <span className="w-8 h-2 rounded-lg bg-accent" />
                  <span className="w-8 h-2 rounded-lg bg-accent" />
                </div>
                <div className="flex space-x-2">
                  <span className="w-12 h-2 rounded-lg bg-accent" />
                  <span className="w-8 h-2 rounded-lg bg-accent" />
                </div>
                <div className="w-8 h-2 rounded-lg bg-accent" />
              </div>
              <div className="space-y-1">
                <div className="w-full h-0.5 bg-accent mb-1" />
                <div className="flex space-x-4">
                  <div className="w-6 h-1 rounded-lg bg-accent" />
                  <div className="w-6 h-1 rounded-lg bg-accent" />
                  <div className="w-6 h-1 rounded-lg bg-accent" />
                </div>
                <div className="flex space-x-4">
                  <div className="w-6 h-1 rounded-lg bg-accent" />
                  <div className="w-6 h-1 rounded-lg bg-accent" />
                  <div className="w-6 h-1 rounded-lg bg-accent" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Logo type="mobile" />
            <Logo type="desktop" />
          </div>
        </div>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Design;
